import { defineConfig } from "vite";
import mkcert from 'vite-plugin-mkcert';
export default defineConfig({
    server: {
		https: true,
		host: 'demo-register-client.local'
	},
	plugins: [mkcert()]
})