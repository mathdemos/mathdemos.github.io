import React, { useEffect, useRef } from 'react';

interface SageCellProps {
  code: string;
  autoEval?: boolean;
}

const SageCell: React.FC<SageCellProps> = ({ code, autoEval = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadSageCell = async () => {
      if (!containerRef.current) return;

      // 检查是否已经加载了脚本
      if (!(window as any).sagecell) {
        const script = document.createElement('script');
        script.src = 'https://sagecell.sagemath.org/static/embedded_sagecell.js';
        script.async = true;
        
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      }

      // 确保 sagecell 对象存在
      if ((window as any).sagecell) {
        (window as any).sagecell.makeSagecell({
          inputLocation: containerRef.current,
          evalButtonText: '运行',
          autoeval: autoEval,
        });
      }
    };

    loadSageCell().catch(console.error);

    return () => {
      // 清理工作
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [autoEval]);

  return (
    <div ref={containerRef}>
      <script type="text/x-sage" dangerouslySetInnerHTML={{ __html: code }} />
    </div>
  );
};

export default SageCell; 