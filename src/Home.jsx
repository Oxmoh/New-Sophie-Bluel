export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <nav>
            <ul>
              <li>
                <a href={`/contacts/1`}>Accueil</a>
              </li>
              <li>
                <a href={`/contacts/2`}>A propos</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }