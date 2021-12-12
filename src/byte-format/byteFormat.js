function byteFormat(bytes, decimals = 2) {
  //formats upto petabytes
  const suffixes = {
    KB: "KB",
    MB: "MB",
    GB: "GB",
    TB: "TB",
    PB: "PB",
  };
  bytes = Number(bytes);
  const suffixKeys = Object.keys(suffixes);
  let currentSuffix = 0;
  let unitBytes = bytes;
  if (isNaN(bytes) || !bytes || isNaN(decimals) || bytes < 0 || decimals < 0)
    return null;
  do {
    unitBytes = unitBytes / 1024;
    currentSuffix += 1;
  } while (unitBytes > 1024 && currentSuffix < suffixKeys.length);
  return `${unitBytes.toFixed(decimals)} ${
    suffixes[suffixKeys[currentSuffix - 1]]
  }`;
}

module.exports = byteFormat;
