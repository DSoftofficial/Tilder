import React from 'react'
import { Editor } from '@monaco-editor/react';

function MonacoEditor() {
    return (
        <>
            <div className="editor-wrapper">
                <Editor
                    height="82vh"
                    width="88vw"
                    theme='vs-dark'
                    defaultLanguage='html'
                    options={{ minimap: { enabled: false }, wordWrapColumn: 80 }}
                    path='fileName'
                />
            </div>
        </>
    )
}

export default MonacoEditor;
