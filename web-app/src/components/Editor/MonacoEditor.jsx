import React from 'react'
import { Editor } from '@monaco-editor/react';

function MonacoEditor() {
    return (
        <>
            <div className="editor-wrapper">
                <Editor
                    height="100vh"
                    width="95vw"
                    theme='vs-dark'
                    defaultLanguage='python'
                    options={{ minimap: { enabled: false }, wordWrapColumn: 80 }}
                    path='fileName'
                />
            </div>
        </>
    )
}

export default MonacoEditor;
