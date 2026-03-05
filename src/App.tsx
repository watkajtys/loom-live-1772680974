import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import AppShell from './components/AppShell';
// Lazy load or import views here
import CommunityQueue from './views/CommunityQueue';
import ContentPipeline from './views/ContentPipeline';
import AXReports from './views/AXReports';
import KnowledgeBase from './views/KnowledgeBase';

function MainViewResolver() {
    const [searchParams] = useSearchParams();
    const view = searchParams.get('view') || 'community_queue';

    switch (view) {
        case 'content_pipeline':
            return <ContentPipeline />;
        case 'ax_reports':
            return <AXReports />;
        case 'knowledge_base':
            return <KnowledgeBase />;
        case 'community_queue':
        default:
            return <CommunityQueue />;
    }
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell><MainViewResolver /></AppShell>} />
      </Routes>
    </BrowserRouter>
  )
}
