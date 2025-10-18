import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
    server: {
		host: 'demo-register-client.local'
	},
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