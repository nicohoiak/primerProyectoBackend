import http from 'http'

const app = http.createServer((req, res) => {
    res.end('Hola desde el backend')
})

app.listen(8080, () => {
    console.log('Primer backend activo en puerto 8080')
})