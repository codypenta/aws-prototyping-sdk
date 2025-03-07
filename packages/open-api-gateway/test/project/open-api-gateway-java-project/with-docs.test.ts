/*********************************************************************************************************************
 Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License").
 You may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 ******************************************************************************************************************** */
import { synthSnapshot } from "projen/lib/util/synth";
import { OpenApiGatewayJavaProject, DocumentationFormat } from "../../../src";

describe("OpenAPI Gateway Java With Docs Unit Tests", () => {
  it("With Docs", () => {
    const project = new OpenApiGatewayJavaProject({
      name: "myapi",
      groupId: "software.aws.test",
      artifactId: "my-api",
      version: "1.0.0",
      clientLanguages: [],
      documentationFormats: [
        DocumentationFormat.HTML2,
        DocumentationFormat.MARKDOWN,
        DocumentationFormat.PLANTUML,
      ],
    });
    expect(synthSnapshot(project)).toMatchSnapshot();
  });
});
