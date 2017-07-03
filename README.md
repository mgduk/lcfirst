# lcfirst

Lowercase the first character of a string

    var lcfirst = require('lcfirst');

    lcfirst('Hello World'); // 'hello World'

It won't lowercase an initialism/acronym:

   lcfirst('NASA makes rockets'); // 'NASA makes rockets'

## License

MIT

