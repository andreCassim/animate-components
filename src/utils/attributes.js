// Moved from `react-attributes` due to build failure.

// Makes sure attributes are defined and store them inside an object.
const shouldNotBeUndefined = (obj) => {
  const store = {};
  /* eslint-disable no-restricted-syntax */
  for (const i in obj) {
    /* eslint-disable no-unused-expressions */
    if (obj[i] === undefined) null;
    store[i] = obj[i];
  }
  return store;
};

const attributes = (props) => {
  const obj = {
    accept: props.accept,
    acceptCharset: props.acceptCharset,
    accessKey: props.accessKey,
    action: props.action,
    allowFullScreen: props.allowFullScreen,
    allowTransparency: props.allowTransparency,
    alt: props.alt,
    async: props.async,
    autoComplete: props.autoComplete,
    autoFocus: props.autoFocus,
    autoPlay: props.autoPlay,
    capture: props.capture,
    cellPadding: props.cellPadding,
    cellSpacing: props.cellSpacing,
    challenge: props.challenge,
    charSet: props.charSet,
    checked: props.checked,
    cite: props.cite,
    classID: props.classID,
    className: props.className,
    colSpan: props.colSpan,
    cols: props.cols,
    content: props.content,
    contentEditable: props.contentEditable,
    contextMenu: props.contextMenu,
    controls: props.controls,
    coords: props.coords,
    crossOrigin: props.crossOrigin,
    data: props.data,
    dateTime: props.dateTime,
    default: props.default,
    defer: props.defer,
    dir: props.dir,
    disabled: props.disabled,
    download: props.download,
    draggable: props.draggable,
    encType: props.encType,
    form: props.form,
    formAction: props.formAction,
    formEncType: props.formEncType,
    formMethod: props.formMethod,
    formNoValidate: props.formNoValidate,
    formTarget: props.formTarget,
    frameBorder: props.frameBorder,
    headers: props.headers,
    height: props.height,
    hidden: props.hidden,
    high: props.high,
    href: props.href,
    hrefLang: props.hrefLang,
    htmlFor: props.htmlFor,
    httpEquiv: props.httpEquiv,
    icon: props.icon,
    id: props.id,
    inputMode: props.inputMode,
    integrity: props.integrity,
    is: props.is,
    keyParams: props.keyParams,
    keyType: props.keyType,
    kind: props.kind,
    label: props.label,
    lang: props.lang,
    list: props.list,
    loop: props.loop,
    low: props.low,
    manifest: props.manifest,
    marginHeight: props.marginHeight,
    marginWidth: props.marginWidth,
    max: props.max,
    maxLength: props.maxLength,
    media: props.media,
    mediaGroup: props.mediaGroup,
    method: props.method,
    min: props.min,
    minLength: props.minLength,
    multiple: props.multiple,
    muted: props.muted,
    name: props.name,
    noValidate: props.noValidate,
    nonce: props.nonce,
    open: props.open,
    optimum: props.optimum,
    pattern: props.pattern,
    placeholder: props.placeholder,
    poster: props.poster,
    preload: props.preload,
    profile: props.profile,
    radioGroup: props.radioGroup,
    readOnly: props.readOnly,
    rel: props.rel,
    required: props.required,
    reversed: props.reversed,
    role: props.role,
    rowSpan: props.rowSpan,
    rows: props.rows,
    sandbox: props.sandbox,
    scope: props.scope,
    scoped: props.scoped,
    scrolling: props.scrolling,
    seamless: props.seamless,
    selected: props.selected,
    shape: props.shape,
    size: props.size,
    sizes: props.sizes,
    span: props.span,
    spellCheck: props.spellCheck,
    src: props.src,
    srcDoc: props.srcDoc,
    srcLang: props.srcLang,
    srcSet: props.srcSet,
    start: props.start,
    step: props.step,
    summary: props.summary,
    tabIndex: props.tabIndex,
    target: props.target,
    title: props.title,
    type: props.type,
    useMap: props.useMap,
    value: props.value,
    width: props.width,
    wmode: props.wmode,
    wrap: props.wrap,
  };

  return obj;
};

export {
  shouldNotBeUndefined,
  attributes,
};
