'use client';

import { useState } from 'react';
import Link from 'next/link';
import { searchVOCs, searchDiseases, searchReceptors, VOC, Disease, Receptor } from '@/lib/data';
import { SearchInput } from '@/components/SearchInput';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [vocs, setVocs] = useState<VOC[]>([]);
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [receptors, setReceptors] = useState<Receptor[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
    if (!searchQuery.trim()) {
      setVocs([]);
      setDiseases([]);
      setReceptors([]);
      return;
    }

    setLoading(true);
    try {
      const [vocsResults, diseasesResults, receptorsResults] = await Promise.all([
        searchVOCs(searchQuery),
        searchDiseases(searchQuery),
        searchReceptors(searchQuery),
      ]);
      setVocs(vocsResults.slice(0, 5));
      setDiseases(diseasesResults.slice(0, 5));
      setReceptors(receptorsResults.slice(0, 5));
    } finally {
      setLoading(false);
    }
  };

  const hasResults = vocs.length > 0 || diseases.length > 0 || receptors.length > 0;

  return (
    <div style={{ minHeight: '100vh', padding: '56px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '56px', textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: '"Newsreader", serif',
              fontSize: '48px',
              fontWeight: 400,
              letterSpacing: '-1px',
              margin: '0 0 24px',
            }}
          >
            Search VOC Triage
          </h1>
          <p style={{ fontSize: '18px', color: '#a9bdb5', margin: 0 }}>
            Search across molecules, diseases, and receptors
          </p>
        </div>

        {/* Search Input */}
        <div style={{ marginBottom: '56px' }}>
          <SearchInput placeholder="Search molecules, diseases, or receptors..." onSearch={handleSearch} />
        </div>

        {/* Results */}
        {loading && (
          <div style={{ textAlign: 'center', color: '#a9bdb5', padding: '40px' }}>
            Searching...
          </div>
        )}

        {!loading && query && !hasResults && (
          <div style={{ textAlign: 'center', color: '#6f857d', padding: '40px' }}>
            <p style={{ fontSize: '18px', margin: 0 }}>No results found for "{query}"</p>
            <p style={{ fontSize: '14px', color: '#6f857d' }}>Try a different search term</p>
          </div>
        )}

        {!loading && hasResults && (
          <div style={{ display: 'grid', gap: '56px' }}>
            {/* Molecules */}
            {vocs.length > 0 && (
              <div>
                <h2
                  style={{
                    fontFamily: '"Newsreader", serif',
                    fontSize: '28px',
                    fontWeight: 500,
                    marginBottom: '24px',
                  }}
                >
                  Molecules ({vocs.length})
                </h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {vocs.map((voc) => (
                    <Link key={voc.id} href={`/molecules/${voc.id}`}>
                      <div
                        style={{
                          padding: '16px',
                          background: 'rgba(255,255,255,.02)',
                          border: '1px solid rgba(255,255,255,.08)',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(74,214,176,.04)';
                          e.currentTarget.style.borderColor = 'rgba(74,214,176,.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,.02)';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)';
                        }}
                      >
                        <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '4px' }}>
                          {voc.name}
                        </div>
                        <div style={{ fontSize: '13px', color: '#6f857d' }}>
                          {voc.formula} · Found in {voc.timesFound} studies
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Diseases */}
            {diseases.length > 0 && (
              <div>
                <h2
                  style={{
                    fontFamily: '"Newsreader", serif',
                    fontSize: '28px',
                    fontWeight: 500,
                    marginBottom: '24px',
                  }}
                >
                  Diseases ({diseases.length})
                </h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {diseases.map((disease) => (
                    <Link key={disease.id} href={`/diseases/${disease.id}`}>
                      <div
                        style={{
                          padding: '16px',
                          background: 'rgba(255,255,255,.02)',
                          border: '1px solid rgba(255,255,255,.08)',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(224,164,88,.04)';
                          e.currentTarget.style.borderColor = 'rgba(224,164,88,.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,.02)';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)';
                        }}
                      >
                        <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '4px' }}>
                          {disease.name}
                        </div>
                        <div style={{ fontSize: '13px', color: '#6f857d' }}>
                          {disease.vocBiomarkers.length} biomarkers · {disease.receptors.length} receptors
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Receptors */}
            {receptors.length > 0 && (
              <div>
                <h2
                  style={{
                    fontFamily: '"Newsreader", serif',
                    fontSize: '28px',
                    fontWeight: 500,
                    marginBottom: '24px',
                  }}
                >
                  Receptors ({receptors.length})
                </h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {receptors.map((receptor) => (
                    <Link key={receptor.id} href={`/receptors/${receptor.id}`}>
                      <div
                        style={{
                          padding: '16px',
                          background: 'rgba(255,255,255,.02)',
                          border: '1px solid rgba(255,255,255,.08)',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(143,182,255,.04)';
                          e.currentTarget.style.borderColor = 'rgba(143,182,255,.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,.02)';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)';
                        }}
                      >
                        <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '4px', color: '#8fb6ff' }}>
                          {receptor.name}
                        </div>
                        <div style={{ fontSize: '13px', color: '#6f857d' }}>
                          {receptor.vocLigands.length} ligands · {receptor.diseases.length} diseases
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
