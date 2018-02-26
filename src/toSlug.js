export default value =>
  value.replace(/[:;.'"!@#$%^&*`~]/g, "").replace(/[ ]/g, "-");
