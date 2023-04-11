import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';
import { viteStaticCopy } from 'vite-plugin-static-copy'


export default defineConfig({
	envPrefix: 'REACT_APP_',
	base: '/react-portfolio/',
	plugins: [
		react(), 
		envCompatible(),
		viteStaticCopy({
      targets: [
        {
          src: 'src/Assets/img',
          dest: 'assets/'
        }
      ]
    })],
});
