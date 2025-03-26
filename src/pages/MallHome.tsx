import React from 'react';
import { mockData } from '../mock/data';

function MallHome() {
    return (
        <div>
            <h1>商场首页</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {mockData.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '16px',
                            width: '200px',
                            textAlign: 'center',
                        }}
                    >
                        <h3>{item.name}</h3>
                        <p>价格：¥{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MallHome;
