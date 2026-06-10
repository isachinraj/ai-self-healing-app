import styles from './CreatePage.module.css';

const CreatePage = () => (
  <main className={styles.container}>
    <h1>Create</h1>
    <p>
      Use this page to scaffold new resources. Connect to your API via <code>src/services/api.ts</code>.
    </p>
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" placeholder="Enter name..." />
      <button type="submit">Submit</button>
    </form>
  </main>
);

export default CreatePage;
