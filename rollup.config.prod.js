import { uglify } from 'rollup-plugin-uglify'

export default {
    input: 'src/spaceship.js',
    output: [
        {
            file: 'dist/spaceship.cjs.min.js',
            format: 'cjs',
            sourcemap: true,
            plugins: [uglify()]
        },
        {
            file: 'dist/spaceship.min.js',
            name: 'spaceship',
            format: 'iife',
            sourcemap: true,
            plugins: [uglify()]
        }
    ]
}