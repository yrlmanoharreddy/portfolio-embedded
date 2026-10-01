import { SectionHeading } from "@/components/ui/section-heading";
import { engineeringNotes } from "@/data/notes";

export function EngineeringNotes() {
  const publishedNotes = engineeringNotes.filter((note) => note.published);

  return (
    <section className="section-block notes-section" id="notes" aria-labelledby="notes-title">
      <div className="site-shell">
        <SectionHeading
          number="08"
          label="Notes from the bench"
          title={<span id="notes-title">A small technical notebook, without invented posts.</span>}
        />

        {publishedNotes.length > 0 ? (
          <ul className="note-list" role="list">
            {publishedNotes.map((note) => (
              <li key={note.slug}>
                <p>{note.publishedAt}</p>
                <h3>{note.title}</h3>
                <span>{note.summary}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="notes-empty">
            <p className="notes-status">
              <span aria-hidden="true" /> Notebook state / empty
            </p>
            <div>
              <h3>Notes are being written.</h3>
              <p>
                The MDX structure is ready. Nothing appears here until there is
                a real note worth publishing.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
