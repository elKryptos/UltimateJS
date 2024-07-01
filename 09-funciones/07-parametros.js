/**
 * {
 * url: ...
 * bucket: S3
 * port: 80
 * }
 */
const config = {
    url: 'http://www.hans.com',
}

// function configApi(url){
//     const defautlUrl = url || 'http://www.hans.com'
//     return `${defautlUrl}`;
// }

function configApi({url}){
    return `${url}`;
}

console.log(configApi('http://www.hans.com'));
console.log(configApi('http://holamundo.io'))