import { CopyEmail } from "@/components/contact/copy-email";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section className="section-block contact-section" id="contact" aria-labelledby="contact-title">
      <div className="site-shell">
        <SectionHeading
          number="10"
          label="Contact"
          title={<span id="contact-title">Good systems conversations are always welcome.</span>}
        />

        <div className="contact-layout">
          <div className="contact-copy">
            <p>
              I’m interested in conversations about firmware, embedded Linux,
              device software, and systems that have to behave correctly on real
              hardware. If the work involves timing, peripherals, constrained
              resources, or a stubborn hardware/software boundary, feel free to
              reach out.
            </p>
            <p className="contact-name">{profile.name}</p>
          </div>

          <div className="contact-directory">
            <div className="contact-row contact-email-row">
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <CopyEmail email={profile.email} />
            </div>
            <div className="contact-row">
              <span>Phone</span>
              <a href="tel:+13143849238">{profile.phone}</a>
            </div>
            <div className="contact-row">
              <span>GitHub</span>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                github.com/yrlmanoharreddy <b aria-hidden="true">↗</b>
              </a>
            </div>
            <div className="contact-row">
              <span>LinkedIn</span>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/manohar-reddy-246436151 <b aria-hidden="true">↗</b>
              </a>
            </div>
          </div>
        </div>

        <div className="resume-actions">
          <div>
            <span>Résumé / PDF</span>
            <p>View in the browser or save a local copy</p>
          </div>
          <div>
            <a href={profile.links.resume} target="_blank" rel="noreferrer">
              View résumé <span aria-hidden="true">↗</span>
            </a>
            <a href={profile.links.resume} download="laxmi-manohar-meda-resume.pdf">
              Download résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
