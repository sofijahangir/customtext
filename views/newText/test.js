/*
 * @Author: Jahangir Ahmad
 * @Date:   2021-07-29 09:16:08
 * @Last Modified by:   Jahangir Ahmad
 * @Last Modified time: 31-07-2021 17:56:13
 */
function download(name, text) {
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`
  );
  element.setAttribute('download', name);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.

document.getElementById('btn').addEventListener(
  'click',
  function () {
    // Generate download of hello.txt file with some content
    const filename = document.getElementById('filename').value;
    // var filename = 'hello.txt';

    // Check empty file name and text box;

    // document.getElementById('btn').disabled = false;
    const exiGen =
      `name=${filename}\n` + `description=${filename}\n` + `language=eng`;
    document.getElementById('textarea2').value = exiGen;
    const text = document.getElementById('mytextarea').value;
    const text1 = document.getElementById('textarea2').value;

    const exmFile = `${filename}.exm`;
    const exiFile = `${filename}.exi`;

    download(exmFile, text);
    download(exiFile, text1);
  },
  false
);
