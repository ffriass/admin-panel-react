export const convertObjectArrayToCsv = (
  data,
  columnDelimiter = ",",
  lineDelimiter = "\n"
) => {
  let result, ctr;

  if (data === null || !data.length) {
    return null;
  }

  const keys = Object.keys(data[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  data.forEach((item) => {
    ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) {
        result += columnDelimiter;
      }

      let value = item[key];
      if (value.split) {
        const splitted = value.split('"');

        // if the number of " in the string is uneven, there needs to be an extra " in front of each "
        if ((splitted.length - 1) % 2 === 1) {
          value = splitted.join('""');
        }
      }

      result += `"${value}"`;
      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
};

export const downloadCsvFile = (data, filePrefix) => {
  // const data = prepareDataForExport(array, localize)
  const csv = convertObjectArrayToCsv(data);
  downloadCsvFromCsvObject(csv, filePrefix);
};

export const downloadCsvFromCsvObject = (csv, filePrefix) => {
  const exportedFileName = `${filePrefix}_${new Date().getTime()}`;
  const blob = new window.Blob([csv], { type: "text/csv;charset=utf-8;" });

  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, exportedFileName);
  } else {
    const link = document.createElement("a");

    // Check if browser supports HTML5 download attribute.
    if (link.download !== undefined) {
      link.setAttribute("href", URL.createObjectURL(blob));
      link.setAttribute("download", exportedFileName);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
