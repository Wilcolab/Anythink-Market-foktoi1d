import { create } from "react-test-renderer";
import { mount } from "enzyme";
import ItemPreview from "../components/ItemPreview";
import { BrowserRouter as Router } from "react-router-dom";

describe("ItemPreview component", () => {
  it("Snapshot testing with no image, must return an image ", () => {
    const component = create(
      <Router>
        <ItemPreview item={{ image: "" }} />
      </Router>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
