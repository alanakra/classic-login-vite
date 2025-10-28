import { defineConfig } from "vite";
import { resolve } from "path";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
    server: {
		host: 'demo-register-client.local',
		port: 5173
	},
	plugins: [mkcert()],
	root: resolve(__dirname, 'pages'),
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'pages/index.html'),
				registration: resolve(__dirname, 'pages/registration.html')
			}
		}
	}
})