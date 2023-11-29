import { jestPreviewConfigure } from "jest-preview";
import "@testing-library/jest-dom";
import "./app/tailwind.css";

jestPreviewConfigure({
  // Enable autoPreview so Jest Preview runs automatically
  // whenever your test fails, without you having to do anything!
  autoPreview: true,
});
