import React from 'react';
import { FB_CHAT } from '../../Data';
import './FbMessengerChat.css';

export default function FbMessengerChat() {
    return (
        <a
            href={`https://m.me/${FB_CHAT.pageId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fb-messenger-button"
            style={{ backgroundColor: FB_CHAT.themeColor }}
            aria-label="মেসেঞ্জারে যোগাযোগ করুন"
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.896 1.437 5.477 3.685 7.166V22l3.468-1.904c.924.252 1.903.384 2.847.384 5.523 0 10-4.145 10-9.237C22 6.145 17.523 2 12 2zm.993 12.416l-2.556-2.73-4.991 2.73 5.49-5.822 2.62 2.73 4.927-2.73-5.49 5.822z"/>
            </svg>
            <span>মেসেজ করুন</span>
        </a>
    );
}
