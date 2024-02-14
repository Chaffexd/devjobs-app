import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import Home from "./page";

test("shows 12 jobs by default", async() => {
    render(<Home />);

    const jobs = await screen.findAllByTestId("job-container");
    expect(jobs).toHaveLength(12);
});

test("adds 3 more jobs to the job page", async() => {
    render(<Home />);

    const button = await screen.findByRole("button", {
        name: /Load More/i
    });

    await user.click(button);

    await waitFor(async() => {
        const jobs = await screen.findAllByTestId("job-container");
        expect(jobs).toHaveLength(15);
    })
})