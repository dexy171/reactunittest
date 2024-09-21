import { fireEvent, render, screen } from "@testing-library/react";
import { Article } from "./Article";

describe("Article component", () => {
  it("should show title correctly", () => {
    render(
      <Article
        title="abc"
        content="description"
        author="John"
        isSponsored={false}
      />
    );
    expect(screen.getByText("abc")).toBeInTheDocument();
  });

  it("should render info about sponsored article", () => {
    render(
      <Article
        title="abc"
        content="description"
        author="John"
        isSponsored={true}
      />
    );
    expect(screen.getByText("Sponsored article")).toBeInTheDocument();
  });

  it("should not render info about sponsored article", () => {
    render(
      <Article
        title="abc"
        content="description"
        author="John"
        isSponsored={false}
      />
    );
    expect(screen.queryByText("Sponsored article")).not.toBeInTheDocument();
  });

  it("should render content as parsed HTML", () => {
    const html = '<a href="https://google.com/">Google link</a>';
    render(
      <Article title="abc" content={html} author="John" isSponsored={false} />
    );
    const link = screen.getByText("Google link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://google.com/");
  });
  it("should show author after button click", () => {
    render(
      <Article
        title="abc"
        content="description"
        author="John"
        isSponsored={false}
      />
    );
    expect(screen.queryByText("Author: John")).not.toBeInTheDocument();

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Show author");

    fireEvent.click(button);

    expect(screen.queryByText("Author: John")).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
});
