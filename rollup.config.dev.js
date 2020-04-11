export default {
    input: 'src/spaceship.js',
    output: [
        {
            file: 'dist/spaceship.cjs.js',
            format: 'cjs'
        },
        {
            file: 'dist/spaceship.js',
            name: 'spaceship',
            format: 'iife'
        }
    ]
}