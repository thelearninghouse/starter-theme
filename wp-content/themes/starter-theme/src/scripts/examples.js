import initExampleImport from '@/scripts/examples/example-import1';
import { exampleVariable, exampleFunction } from '@/scripts/examples/example-import2';

function examples() {
  exampleFunction();
  initExampleImport();
  console.log(exampleVariable);
}

export default examples;
