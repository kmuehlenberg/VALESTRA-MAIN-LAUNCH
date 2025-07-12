export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: 'black', color: 'white' }}>
      <img src="/crest.png" alt="Valestra Crest" style={{ width: '80px', marginBottom: '20px' }} />
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>This is not just a gift. It’s a statement.</h1>
      <p style={{ textAlign: 'center', maxWidth: '500px', marginTop: '10px' }}>
        Unlock limited bundles. Earn LuxePoints. Invite others. The Luxe Vault opens — but not for everyone.
      </p>
      <button style={{ marginTop: '20px', padding: '10px 20px', background: 'white', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Unlock the Drop
      </button>
    </div>
  );
}
