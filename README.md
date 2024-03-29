# lewx.dev

The source code for my personal website [lewx.dev](https://lewx.dev).

Built with ❤️ and

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

<!-- TODO: add preview -->
<!-- ## Preview
![lewx.dev preview]() -->

## Deployment

The website is hosted on [Vercel](https://vercel.com) and is automatically built
and deployed on every merge into the `main` branch.

Like my other projects, this repository is also configured to require a pull
request to merge changes into the trunk branch (based on the
[GitHub configuration guidelines for Graphite](https://graphite.dev/docs/github-configuration-guidelines))
This ensures changes are reviewed and before being deployed, and keeps a record
of discussions and decisions made during the development process.

## Development

After cloning the repository, run the following to start developing locally:

```shell
# install dependencies
bun install
# start the development server
bun dev
# open in the browser
open http://localhost:4321
```

---

&copy; 2024-Present, **lewx.dev** is released under the [MIT License](LICENSE.md)
and is maintained by [@lewxdev](https://github.com/lewxdev).
