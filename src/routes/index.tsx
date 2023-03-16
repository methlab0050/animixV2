import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>
        AnimixV2 <span class="me-when">😈😈😈</span>
      </h1>

      <ul>
        <li>
          Check out the README.md at the root of the project or click <a href="/dev">here</a>
        </li>
        <li>
          Check out routes <a href="#routes">here</a>
        </li>
      </ul>

      <h2>Commands</h2>

      <table class="commands">
        <tbody>
          <tr>
            <td>
              <code>npm run dev</code>
            </td>
            <td>Start the dev server and watch for changes.</td>
          </tr>
          <tr>
            <td>
              <code>npm run preview</code>
            </td>
            <td>Production build and start preview server.</td>
          </tr>
          <tr>
            <td>
              <code>npm run build</code>
            </td>
            <td>Production build.</td>
          </tr>
          <tr>
            <td>
              <code>npm run qwik add</code>
            </td>
            <td>Select an integration to add.</td>
          </tr>
        </tbody>
      </table>

      <h2>Routes</h2>
      <section id="routes">
        <ul>
          <li>
            <a href="/mal_id">anime info</a>
          </li>
          <li>
            <a href="/mal_id/s1e2">watch anime</a>
          </li>
          <li>
            <a href="/mal_id/relations">anime relations (sequels, prequels, etc)</a>
          </li>
        </ul>
      </section>

      Hit me up on discord if you have any issues

    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
