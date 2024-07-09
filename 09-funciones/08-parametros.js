const config = [    
    'https://holamundo.io',
    145,
    '80',
    ]

function webserver([url, bucket, port]) {

   return url + "/" + bucket + ":" + port;
}

console.log(webserver(config));