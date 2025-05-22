import React, { useRef } from 'react';
import '../components/styles/drawingPanel.scss';

import Row from './Row';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

interface DrawingPanelProps {
    width: number;
    height: number;
    selectedColor: any;
}

export default function DrawingPanel(props: DrawingPanelProps) {
    const { width, height, selectedColor } = props;
    const panelRef = useRef<HTMLDivElement>(null);

    const handleExportAsPNG = () => {
        if (panelRef.current === null) {
            return;
        }

        toPng(panelRef.current)
            .then((dataUrl) => {
                saveAs(dataUrl, 'drawing.png');
            })
            .catch((error) => {
                console.error('Erro ao exportar como PNG', error);
            });
    };

    const rows = [];
    for (let i = 0; i < height; i++) {
        rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
    }

    return (
        <div id='drawingPanel'>
            <div id='pixels' ref={panelRef}>
                {rows}
            </div>
            <button onClick={handleExportAsPNG} className='button'>
                Exportar imagem
            </button>
        </div>
    );
}
