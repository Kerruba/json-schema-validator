var Ajv = require('ajv');
var ajv = new Ajv({allErrors: true});

ajv.addKeyword('isChildTerm', {
  async: true,
  type: 'integer',
  validate: checkIsChildTerm
});

function checkIsChildTerm(schema, data) {
  // TODO
  console.log(schema);
  return true;
}

function runValidation(inputSchema, submittable) {
  var validate = ajv.compile(inputSchema);
  var valid = validate(submittable);
  if (valid) {
    return { result: 'Valid!'};
  } else {
    return { result: 'Invalid: ' + ajv.errorsText(validate.errors)};
  }
}