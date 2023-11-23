#  Deploying multiple web applications

> Deploying multiple web applications with front and back separation under a domain name.

## nginx

- nginx 1.20.2

- html

  ```
  html
  ├─app1
  │  ├─assets
  │  ├─index.html
  │  └─vite.svg
  ├─app2
  │  ├─assets
  │  ├─index.html
  │  └─vite.svg
  ├─50x.html
  └─index.html
  ```

  ​

## nginx.conf

```nginx
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;

        location / {
            root   html;
            index  index.html index.htm;
        }
		
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

	# app1 upstream
	upstream app1{
		server localhost:9001;
	}

	# app2 upstream
	upstream app2{
		server localhost:9002;
	}
	
	server {
		listen       9999;
		server_name  localhost;
		
		# app1 frontend
		location / {
			root  html/app1;
			index  index.html index.htm;
			# 解决路由模式为history时，刷新页面404的问题
			try_files $uri $uri/ /index.html;
		}
		
		# app2 frontend
		location /ui2 {
			alias  html/app2;
			index  index.html index.htm;
			# 解决部署在二级目录下且路由模式为history时，刷新页面404或空白的问题
			try_files $uri $uri/ /ui2/index.html;
		}

		# app1 backend
		location /app1 {
			proxy_pass http://app1;
			proxy_redirect default;
		}
		
		# app2 backend
		location /app2 {
			proxy_pass http://app2;
			proxy_redirect default;
		}
	}

}
```

