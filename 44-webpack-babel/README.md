Webpack, Babel, and You
=======================

## Objectives

- Webpack
- Babel
- npm / yarn
- What allows what?
  - task runner
  - module bundler / bundling
    - modules / plugins
  - compilers / transpilers
  - ES6 / JSX
  - minification
  - etc.

## Things to Demo

- Why compiling/transpiling?
- Why minification?
- Why bundling?

### Demonstration Tools

- [Chromium (old builds)](https://www.chromium.org/getting-involved/download-chromium)
- [Network Link Conditioner](http://nshipster.com/network-link-conditioner/)
  - [Ping / Latency](https://wondernetwork.com/pings)
- [wget](https://apple.stackexchange.com/questions/100570/getting-files-all-at-once-from-a-web-page-using-curl) + [time](https://unix.stackexchange.com/questions/10745/how-do-i-time-a-specific-command)
- [How do I get the size of a directory on the command line?](https://unix.stackexchange.com/questions/185764/how-do-i-get-the-size-of-a-directory-on-the-command-line)

```sh
# Downloading
time wget -r -np -p -k -H -e robots=off <url>
# Size of downloaded files
du -sh $pwd
```

Minification demo websites:
- [UglifyJS](https://github.com/mishoo/UglifyJS) is the one I know.
- [UglifyJS Online](https://skalman.github.io/UglifyJS-online/)

## Lecture Notes

Everything you need to know is in this article: [Modern JavaScript Explained For Dinosaurs](https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70)

## Resources

[React Environment Requirements](https://reactjs.org/docs/javascript-environment-requirements.html)
