'use client';

import Link from 'next/link';
import OrbitCanvas from '@/components/OrbitCanvas';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Manrope', sans-serif" }}>
      {/* HERO SECTION - FR 1.1, 1.2, 1.3 */}
      <section style={{ textAlign: 'center', padding: '88px 56px 0', position: 'relative' }}>
        <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12.5px', letterSpacing: '5px', color: '#4ad6b0', marginBottom: '36px' }}>
          OLFACTORY&nbsp;BIOMARKER&nbsp;GRAPH
        </div>
        <h1
          style={{
            fontFamily: '"Newsreader", serif',
            fontWeight: 400,
            fontSize: '80px',
            lineHeight: 0.97,
            letterSpacing: '-2px',
            margin: '0 auto 30px',
            maxWidth: '900px',
          }}
        >
          Reading disease in<br />
          the air we <em>exhale</em>.
        </h1>
        <p style={{ fontSize: '19px', lineHeight: 1.65, color: '#a9bdb5', maxWidth: '520px', margin: '0 auto 40px', fontWeight: 500 }}>
          VOC Triage connects volatile compounds to olfactory receptors and disease signatures — and proposes the experiments worth running next.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
          <Link href="/oracle">
            <div
              className="vt-teal"
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '56px',
                padding: '0 32px',
                borderRadius: '30px',
                background: '#4ad6b0',
                color: '#04130f',
                fontSize: '16px',
                fontWeight: 700,
              }}
            >
              Launch oracle
            </div>
          </Link>
          <Link href="/molecules">
            <div
              className="vt-ghost"
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '56px',
                padding: '0 30px',
                borderRadius: '30px',
                border: '1px solid rgba(255,255,255,.2)',
                color: '#a9bdb5',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              Explore molecules
            </div>
          </Link>
        </div>
      </section>

      {/* ORBIT CANVAS */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 0 10px' }}>
        <OrbitCanvas />
      </div>

      {/* STATS STRIP */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid rgba(255,255,255,.08)', borderBottom: '1px solid rgba(255,255,255,.08)', margin: '0 56px' }}>
        <div style={{ padding: '30px 0 30px 40px', borderRight: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 600, fontSize: '34px', color: '#4ad6b0', lineHeight: 1, marginBottom: '8px' }}>
            128+
          </div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', letterSpacing: '1.5px', color: '#6f857d' }}>
            VOC MOLECULES
          </div>
        </div>
        <div style={{ padding: '30px 0 30px 40px', borderRight: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 600, fontSize: '34px', color: '#8fb6ff', lineHeight: 1, marginBottom: '8px' }}>
            46+
          </div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', letterSpacing: '1.5px', color: '#6f857d' }}>
            RECEPTORS
          </div>
        </div>
        <div style={{ padding: '30px 0 30px 40px', borderRight: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 600, fontSize: '34px', color: '#e0a458', lineHeight: 1, marginBottom: '8px' }}>
            31+
          </div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', letterSpacing: '1.5px', color: '#6f857d' }}>
            DISEASES
          </div>
        </div>
        <div style={{ padding: '30px 0 30px 40px' }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 600, fontSize: '34px', color: '#e7f0ee', lineHeight: 1, marginBottom: '8px' }}>
            390+
          </div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', letterSpacing: '1.5px', color: '#6f857d' }}>
            RELATIONSHIPS
          </div>
        </div>
      </div>

      {/* EDITORIAL ROWS - FR 1.2 */}
      <div style={{ margin: '0 56px', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
        {/* Row 1 */}
        <Link href="/molecules">
          <div className="vt-row" style={{ display: 'grid', gridTemplateColumns: '72px 1fr 300px 48px', gap: '20px', alignItems: 'center', padding: '34px 40px', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
            <span className="vt-rownum" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '13px', color: '#6f857d' }}>
              01
            </span>
            <div>
              <div style={{ fontFamily: '"Newsreader", serif', fontSize: '26px', fontWeight: 500, marginBottom: '5px', letterSpacing: '-.3px' }}>
                The molecule library
              </div>
              <div style={{ fontSize: '14.5px', color: '#6f857d', fontWeight: 500, lineHeight: 1.4 }}>
                Formula, receptor ligands and disease links for every volatile compound.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', color: '#a9bdb5', border: '1px solid rgba(255,255,255,.14)', borderRadius: '20px', padding: '5px 13px' }}>
                Acetone
              </span>
              <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', color: '#a9bdb5', border: '1px solid rgba(255,255,255,.14)', borderRadius: '20px', padding: '5px 13px' }}>
                Nonanal
              </span>
              <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', color: '#a9bdb5', border: '1px solid rgba(255,255,255,.14)', borderRadius: '20px', padding: '5px 13px' }}>
                Decanal
              </span>
            </div>
            <span className="vt-arrow" style={{ fontSize: '24px', justifySelf: 'end' }}>
              →
            </span>
          </div>
        </Link>

        {/* Row 2 */}
        <Link href="/diseases">
          <div className="vt-row" style={{ display: 'grid', gridTemplateColumns: '72px 1fr 300px 48px', gap: '20px', alignItems: 'center', padding: '34px 40px', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
            <span className="vt-rownum" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '13px', color: '#6f857d' }}>
              02
            </span>
            <div>
              <div style={{ fontFamily: '"Newsreader", serif', fontSize: '26px', fontWeight: 500, marginBottom: '5px', letterSpacing: '-.3px' }}>
                Disease explorer
              </div>
              <div style={{ fontSize: '14.5px', color: '#6f857d', fontWeight: 500, lineHeight: 1.4 }}>
                VOC biomarker panels and receptor connections per disease.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', color: '#a9bdb5', border: '1px solid rgba(255,255,255,.14)', borderRadius: '20px', padding: '5px 13px' }}>
                Lung cancer
              </span>
              <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', color: '#a9bdb5', border: '1px solid rgba(255,255,255,.14)', borderRadius: '20px', padding: '5px 13px' }}>
                Diabetes
              </span>
            </div>
            <span className="vt-arrow" style={{ fontSize: '24px', justifySelf: 'end' }}>
              →
            </span>
          </div>
        </Link>

        {/* Row 3 */}
        <Link href="/receptors">
          <div className="vt-row" style={{ display: 'grid', gridTemplateColumns: '72px 1fr 300px 48px', gap: '20px', alignItems: 'center', padding: '34px 40px', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
            <span className="vt-rownum" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '13px', color: '#6f857d' }}>
              03
            </span>
            <div>
              <div style={{ fontFamily: '"Newsreader", serif', fontSize: '26px', fontWeight: 500, marginBottom: '5px', letterSpacing: '-.3px' }}>
                Receptor atlas
              </div>
              <div style={{ fontSize: '14.5px', color: '#6f857d', fontWeight: 500, lineHeight: 1.4 }}>
                Tissue expression and ligand panels for each olfactory receptor.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', color: '#a9bdb5', border: '1px solid rgba(255,255,255,.14)', borderRadius: '20px', padding: '5px 13px' }}>
                OR51E1
              </span>
              <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', color: '#a9bdb5', border: '1px solid rgba(255,255,255,.14)', borderRadius: '20px', padding: '5px 13px' }}>
                TAAR5
              </span>
            </div>
            <span className="vt-arrow" style={{ fontSize: '24px', justifySelf: 'end' }}>
              →
            </span>
          </div>
        </Link>

        {/* Row 4 */}
        <Link href="/oracle">
          <div className="vt-row" style={{ display: 'grid', gridTemplateColumns: '72px 1fr 300px 48px', gap: '20px', alignItems: 'center', padding: '34px 40px' }}>
            <span className="vt-rownum" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '13px', color: '#6f857d' }}>
              04
            </span>
            <div>
              <div style={{ fontFamily: '"Newsreader", serif', fontSize: '26px', fontWeight: 500, marginBottom: '5px', letterSpacing: '-.3px' }}>
                ORacle hypotheses
              </div>
              <div style={{ fontSize: '14.5px', color: '#6f857d', fontWeight: 500, lineHeight: 1.4 }}>
                Rule-based, ranked and testable hypotheses for drug discovery.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', color: '#4ad6b0', border: '1px solid rgba(74,214,176,.3)', borderRadius: '20px', padding: '5px 13px' }}>
                rule-based
              </span>
              <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', color: '#4ad6b0', border: '1px solid rgba(74,214,176,.3)', borderRadius: '20px', padding: '5px 13px' }}>
                ranked
              </span>
            </div>
            <span className="vt-arrow" style={{ fontSize: '24px', justifySelf: 'end' }}>
              →
            </span>
          </div>
        </Link>
      </div>

      {/* PULL QUOTE */}
      <div style={{ textAlign: 'center', padding: '80px 56px 72px' }}>
        <p
          style={{
            fontFamily: '"Newsreader", serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: '34px',
            lineHeight: 1.38,
            color: '#e7f0ee',
            maxWidth: '680px',
            margin: '0 auto',
          }}
        >
          "Turning the chemistry of breath into the next experiment worth running."
        </p>
      </div>

      {/* FOOTER - FR 1.3 */}
      <footer
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '28px 56px',
          borderTop: '1px solid rgba(255,255,255,.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '18px',
              height: '18px',
              border: '1px solid rgba(255,255,255,.25)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ width: '5px', height: '5px', background: '#4ad6b0', borderRadius: '50%' }} />
          </div>
          <span style={{ fontFamily: '"Newsreader", serif', fontStyle: 'italic', fontSize: '16px' }}>
            voc triage
          </span>
        </div>
        <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11.5px', color: '#4f6359', letterSpacing: '.3px' }}>
          Research use only · associations illustrative · validate experimentally
        </span>
      </footer>
    </div>
  );
}
