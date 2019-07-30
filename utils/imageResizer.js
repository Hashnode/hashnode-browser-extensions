const imageResizer = (src, resize, defaultImage, fm) => {
  if (!src) {
    return defaultImage;
  } else {
    let newSrc = src;
    if (src.indexOf('//res.cloudinary.com') !== -1 && src.indexOf('/upload/') !== -1) {
      const parts = src.split('/upload/');
      const format = parts[1].substring(parts[1].lastIndexOf('.') + 1);
      if (parts[1].indexOf('ama_banners') !== -1) {
        const version = parts[1].substring(1, parts[1].indexOf('/'));
        const path = parts[1].substring(parts[1].indexOf('/') + 1, parts[1].lastIndexOf('.'));
        newSrc = `${parts[0]}/upload/${path}/${version}.${format}`;
      }
      else {
        const nextParts = parts[1].split('/');
        if (nextParts[0].indexOf('v') === 0) {
          nextParts[0] = nextParts[0].substring(1);
        }
        newSrc = `${parts[0]}/upload/${nextParts[1].substring(0, nextParts[1].lastIndexOf('.'))}/${nextParts[0]}.${format}`;
      }
      newSrc = newSrc.replace('//res.cloudinary.com', '//hashnode.imgix.net/res');
    }
    else if (src.indexOf('//cdn.hashnode.com') !== -1 && src.indexOf('/upload/') !== -1) {
      const parts = src.split('/upload/');
      if (parts[1].indexOf('v') !== 0) {
        newSrc = `${parts[0]}/upload/${parts[1].substring(parts[1].indexOf('/') + 1)}`
      }
      newSrc = newSrc.replace('//cdn.hashnode.com', '//hashnode.imgix.net');
    }

    if (newSrc.indexOf('//hashnode.imgix.net') === -1) {
      return newSrc;
    }

    let opts = '';
    if (resize) {
      Object.keys(resize).forEach(prop => {
        if (prop === 'w' || prop === 'h') {
          opts += `${prop}=${resize[prop]}&`;
        }
        else if (prop === 'c') {
          opts += `fit=crop&crop=${resize[prop] === 'face' ? 'faces' : 'entropy'}&`
        }
      });

      if (opts) {
        opts += 'auto=format,enhance&q=60';
      }
      else {
        opts = 'auto=format,enhance&q=60';
      }

      if (fm){
        opts += '&fm=jpg'
      }
    }

    return `${newSrc}?${opts}`;
  }
}

export default  imageResizer;