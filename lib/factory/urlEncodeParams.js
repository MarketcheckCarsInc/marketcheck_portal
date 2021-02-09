const urlEncodeParams = (data) => {

  console.log("hi");
	return Object.keys(data).filter(x => data[x]).map(function (k) {
      let values = ''

      if (typeof data[k] === 'object') {
        values = Object.keys(data[k]).map(function (key) {
          return data[k][key]
        }).join(',')
      } else {
        values = encodeURIComponent(data[k])
      }

      return encodeURIComponent(k) + '=' + values
    }).join('&')
}

export default urlEncodeParams