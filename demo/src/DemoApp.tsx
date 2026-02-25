import React, { useMemo, useState, useCallback, useEffect } from 'react';
// @ts-expect-error: Unable to resolve module in demo context.
import * as Icons from '@tdm-icons/icons';
// eslint-disable-next-line import/no-relative-packages
import pkg from '../../package.json';
import '../styles.css';

type IconComponent = React.ComponentType<any>;

const entries = Object.entries(Icons) as [string, IconComponent][];

const toKebab = (name: string) =>
  name
    .replace(/Icon$/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();

export const DemoApp: React.FC = () => {
  const [iconQuery, setIconQuery] = useState('');
  const [colorQuery, setColorQuery] = useState('');
  const [flagQuery, setFlagQuery] = useState('');
  const [copiedImport, setCopiedImport] = useState<string | null>(null);

  const { flags, colors, others } = useMemo(() => {
    const byName = [...entries].sort(([a], [b]) => a.localeCompare(b));
    const flagsSection: [string, IconComponent][] = [];
    const colorsSection: [string, IconComponent][] = [];
    const othersSection: [string, IconComponent][] = [];

    byName.forEach((entry) => {
      const [name] = entry;
      if (/CircleIcon$/.test(name)) {
        flagsSection.push(entry);
      } else if (/ColorIcon$/.test(name)) {
        colorsSection.push(entry);
      } else {
        othersSection.push(entry);
      }
    });

    return { flags: flagsSection, colors: colorsSection, others: othersSection };
  }, []);

  const filtered = useMemo(() => {
    const iq = iconQuery.trim().toLowerCase();
    const cq = colorQuery.trim().toLowerCase();
    const fq = flagQuery.trim().toLowerCase();

    const match = (name: string, q: string) =>
      !q || name.toLowerCase().includes(q);

    return {
      others: others.filter(([name]) => match(name, iq)),
      colors: colors.filter(([name]) => match(name, cq)),
      flags: flags.filter(([name]) => match(name, fq)),
    };
  }, [flags, colors, others, iconQuery, colorQuery, flagQuery]);

  const totalCount = entries.length;
  const visibleCount =
    filtered.others.length + filtered.colors.length + filtered.flags.length;
  const version = (pkg as any).version as string | undefined;

  const handleCopy = useCallback((name: string) => {
    const importText = `import ${name} from '@tdm-design/icons/${name}';`;
    navigator.clipboard?.writeText(importText).catch(() => { });
    setCopiedImport(importText);
  }, []);

  useEffect(() => {
    if (!copiedImport) return;
    const id = window.setTimeout(() => setCopiedImport(null), 1800);
    return () => window.clearTimeout(id);
  }, [copiedImport]);

  return (
    <div className="demo-root">
      <header className="demo-header">
        <div className="demo-title">
          <h1>TDM Design Icons</h1>
          {version && <span className="demo-version">v{version}</span>}
        </div>
        <p>
          {visibleCount} / {totalCount} icons
        </p>
      </header>

      <main>
        {/* Normal icons first */}
        <section>
          <h2 className="demo-section-title">Icons</h2>
          <div className="demo-search-row">
            <input
              className="demo-search"
              placeholder="Search icons..."
              value={iconQuery}
              onChange={(e) => setIconQuery(e.target.value)}
            />
          </div>
          <div className="demo-grid">
            {filtered.others.map(([name, Icon]) => (
              <button
                key={name}
                type="button"
                className="demo-card"
                onClick={() => handleCopy(name)}
              >
                <div className="demo-icon">
                  <Icon />
                </div>
                <div className="demo-name-tag">{toKebab(name)}</div>
              </button>
            ))}
            {filtered.others.length === 0 && (
              <div className="demo-empty">
                No icons match “{iconQuery}”.
              </div>
            )}
          </div>
        </section>

        {/* Color icons */}
        <section style={{ marginTop: 32 }}>
          <h2 className="demo-section-title">Brand</h2>
          <div className="demo-search-row">
            <input
              className="demo-search"
              placeholder="Search brand icons..."
              value={colorQuery}
              onChange={(e) => setColorQuery(e.target.value)}
            />
          </div>
          <div className="demo-grid">
            {filtered.colors.map(([name, Icon]) => (
              <button
                key={name}
                type="button"
                className="demo-card"
                onClick={() => handleCopy(name)}
                title={`Click to copy import: import ${name} from '@tdm-design/icons/${name}';`}
              >
                <div className="demo-icon">
                  <Icon />
                </div>
                <div className="demo-name-tag">{toKebab(name)}</div>
              </button>
            ))}
            {filtered.colors.length === 0 && (
              <div className="demo-empty">
                No color icons match “{colorQuery}”.
              </div>
            )}
          </div>
        </section>

        {/* Flags at the end */}
        <section style={{ marginTop: 32 }}>
          <h2 className="demo-section-title">Flags</h2>
          <div className="demo-search-row">
            <input
              className="demo-search"
              placeholder="Search flag icons..."
              value={flagQuery}
              onChange={(e) => setFlagQuery(e.target.value)}
            />
          </div>
          <div className="demo-grid">
            {filtered.flags.map(([name, Icon]) => (
              <button
                key={name}
                type="button"
                className="demo-card"
                onClick={() => handleCopy(name)}
                title={`Click to copy import: import ${name} from '@tdm-design/icons/${name}';`}
              >
                <div className="demo-icon">
                  <Icon />
                </div>
                <div className="demo-name-tag">{toKebab(name)}</div>
              </button>
            ))}
            {filtered.flags.length === 0 && (
              <div className="demo-empty">
                No flag icons match “{flagQuery}”.
              </div>
            )}
          </div>
        </section>
      </main>

      {copiedImport && (
        <div className="demo-toast">Copied: {copiedImport}</div>
      )}
    </div>
  );
};

