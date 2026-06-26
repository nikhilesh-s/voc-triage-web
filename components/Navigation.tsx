'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navigation() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '26px 56px',
        borderBottom: '1px solid rgba(255,255,255,.07)',
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'rgba(6,9,12,.88)',
        backdropFilter: 'blur(14px)',
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            width: '22px',
            height: '22px',
            border: '1px solid rgba(255,255,255,.35)',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              background: '#4ad6b0',
              borderRadius: '50%',
              boxShadow: '0 0 7px #4ad6b0',
            }}
          />
        </div>
        <Link href="/">
          <span
            style={{
              fontFamily: '"Newsreader", serif',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: '21px',
              letterSpacing: '-.2px',
              cursor: 'pointer',
              color: '#e7f0ee',
            }}
          >
            voc triage
          </span>
        </Link>
      </div>

      <div style={{ flex: 1 }} />

      {/* Nav Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '34px', marginRight: '36px' }}>
        <Link href="/molecules">
          <span className="vt-navlink" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12.5px', letterSpacing: '1.2px' }}>
            MOLECULES
          </span>
        </Link>
        <Link href="/diseases">
          <span className="vt-navlink" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12.5px', letterSpacing: '1.2px' }}>
            DISEASES
          </span>
        </Link>
        <Link href="/receptors">
          <span className="vt-navlink" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12.5px', letterSpacing: '1.2px' }}>
            RECEPTORS
          </span>
        </Link>
        <Link href="/oracle">
          <span className="vt-navlink" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12.5px', letterSpacing: '1.2px' }}>
            ORACLE
          </span>
        </Link>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <Link href="/search">
          <div
            className="vt-ghost"
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '42px',
              padding: '0 20px',
              borderRadius: '30px',
              border: '1px solid rgba(255,255,255,.22)',
              color: '#a9bdb5',
              fontSize: '13.5px',
              fontWeight: 600,
            }}
          >
            Quick preview
          </div>
        </Link>
        <Link href="/oracle">
          <div
            className="vt-teal"
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '42px',
              padding: '0 22px',
              borderRadius: '30px',
              background: '#4ad6b0',
              color: '#04130f',
              fontSize: '13.5px',
              fontWeight: 700,
            }}
          >
            Launch oracle
          </div>
        </Link>
      </div>
    </nav>
  );
}
