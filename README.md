# Service HUB for home automation

  - Versions
  - Docker usage
  - Console usage
    - Run app
    - Run tests
    - Vulnerabilities
    - Broken dependencies
  - Postman collection
  - RAML
  - License

---

## Assumptions

## Versions
Tested with:
  - Node/8.6.0 & NPM/5.3.0

## Docker usage


## Console usage
Run service in port 9055
```
npm install
npm run dev
```

### Tests
```
npm run test
```

### Vulnerabilities
To check vulnerabilities, you'll need to have `nsp` installed

To install:
``` sh
npm i nsp
```
To check:
``` sh
npm run nsp
```

### Broken dependencies
To check for issues with dependencies in your packaje JSON, you'll
need to have `depcheck` installed

To install:
``` sh
npm i depcheck
```
To check:
``` sh
npm run depcheck
```

## Postman
Postman collections is inside folder _postman/_

## RAML Documentation
Path with API documentation
documentation/index.htm

To generate RAML docs
```
npm run build:apiDocs
```



License
----

![Reconocimiento – NoComercial – SinObraDerivada (by-nc-nd): No se permite un uso comercial de la obra original ni la generación de obras derivadas.](http://es.creativecommons.org/blog/wp-content/uploads/2013/04/by-nc-nd.eu_petit.png "Reconocimiento – NoComercial – SinObraDerivada (by-nc-nd): No se permite un uso comercial de la obra original ni la generación de obras derivadas.")

Williams Aguilera - webnator@gmail.com
