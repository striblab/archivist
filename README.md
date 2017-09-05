# archivist

A set of tools for archiving data and websites.

## Goals

* Command line.  Easy commands to get files and upload them to S3, with some sort of caching and only uploading when things have changed.
    * `archivist download http://example.com/file.html ./local/file.html s3://remote/archive/{{DATETIME}}/file.html`
    * `archivist site http://example.com/ ./local/example.com/ s3://remote/archive/example.com/`
    * `archivist sync ./local/example.com/ s3://remote/archive/example.com/`
    * `archivist screenshot http://example.com/ ./local/example.com.png s3://remote/archive/example.com/`
* Library.  Simple way to provide a list of remote files, take screenshots, wget whole page, and scrape for data.
    * ```js
    archivist({
      files: [
        'http://example.com/file.one',
        'http://example.com/file.two'
      ],
      screenshot: true,
      site: /*file\.two/i,
      scrape: (file, contents) => {
        return contents.split('\n');
      },
      archive: 's3://remote/archive/example/',
      compare: true
    });
      ```
