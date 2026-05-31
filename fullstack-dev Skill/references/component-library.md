# Component Library

Load only when building specific component types listed here.

---

## KPI Card
```jsx
function KPICard({ label, value, delta, trend }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
      <p className="text-xs font-medium text-gray-500 uppercase tracking-widest">{label}</p>
      <p className="text-3xl font-bold text-gray-900 mt-1 tabular-nums">{value}</p>
      <span className={`inline-flex items-center gap-1 text-xs font-medium mt-2 ${trend === 'up' ? 'text-emerald-600' : 'text-red-500'}`}>
        {trend === 'up' ? '↑' : '↓'} {delta}
      </span>
    </div>
  );
}
```

---

## Data Table (sortable)
```jsx
function Table({ columns, data }) {
  const [sort, setSort] = useState({ key: null, dir: 'asc' });
  const sorted = sort.key ? [...data].sort((a, b) => {
    const v = a[sort.key] < b[sort.key] ? -1 : 1;
    return sort.dir === 'asc' ? v : -v;
  }) : data;

  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>{columns.map(col => (
            <th key={col.key} onClick={() => setSort(s => ({ key: col.key, dir: s.key === col.key && s.dir === 'asc' ? 'desc' : 'asc' }))}
              className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-900 select-none">
              {col.label} {sort.key === col.key ? (sort.dir === 'asc' ? ' ↑' : ' ↓') : ''}
            </th>
          ))}</tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {sorted.length === 0
            ? <tr><td colSpan={columns.length} className="text-center py-12 text-gray-400">No data found</td></tr>
            : sorted.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                {columns.map(col => <td key={col.key} className="px-4 py-3 text-gray-700">{row[col.key]}</td>)}
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

---

## Command Palette
```jsx
function CommandPalette({ items, onSelect, onClose }) {
  const [query, setQuery] = useState('');
  const filtered = items.filter(i => i.label.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-[20vh] z-50" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden" onClick={e => e.stopPropagation()}>
        <input autoFocus value={query} onChange={e => setQuery(e.target.value)}
          placeholder="Type a command..." className="w-full px-4 py-3 text-sm outline-none border-b border-gray-100" />
        <ul className="max-h-64 overflow-y-auto py-2">
          {filtered.map(item => (
            <li key={item.id} onClick={() => { onSelect(item); onClose(); }}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 cursor-pointer transition-colors">
              {item.icon && <span className="text-gray-400">{item.icon}</span>}
              {item.label}
              {item.shortcut && <kbd className="ml-auto text-xs text-gray-400 font-mono">{item.shortcut}</kbd>}
            </li>
          ))}
          {filtered.length === 0 && <li className="px-4 py-6 text-center text-sm text-gray-400">No results</li>}
        </ul>
      </div>
    </div>
  );
}
```

---

## Toast Notification
```jsx
function useToast() {
  const [toasts, setToasts] = useState([]);
  const add = (msg, type = 'default') => {
    const id = Date.now();
    setToasts(t => [...t, { id, msg, type }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3000);
  };
  const ToastContainer = () => (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      {toasts.map(t => (
        <div key={t.id} className={`px-4 py-3 rounded-lg text-sm font-medium shadow-lg animate-slideIn
          ${t.type === 'error' ? 'bg-red-600 text-white' : t.type === 'success' ? 'bg-emerald-600 text-white' : 'bg-gray-900 text-white'}`}>
          {t.msg}
        </div>
      ))}
    </div>
  );
  return { add, ToastContainer };
}
```

---

## Form Field with Validation
```jsx
function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
// Input base styles: "w-full px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
```

---

## Badge / Status Pill
```jsx
const badgeStyles = {
  success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  warning: 'bg-amber-50 text-amber-700 border-amber-200',
  error: 'bg-red-50 text-red-700 border-red-200',
  info: 'bg-blue-50 text-blue-700 border-blue-200',
  neutral: 'bg-gray-100 text-gray-600 border-gray-200',
};
function Badge({ label, variant = 'neutral' }) {
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${badgeStyles[variant]}`}>{label}</span>;
}
```
