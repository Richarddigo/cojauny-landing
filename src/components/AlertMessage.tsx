"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import {
    CheckCircleIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';

export type AlertType = 'success' | 'error' | 'info';

interface AlertMessageProps {
    type: AlertType;
    message: string | ReactNode;
    className?: string;
    onClose?: () => void;
    autoDismiss?: boolean;
    autoDismissDelay?: number;
}

const alertConfig: Record<
    AlertType,
    { icon: typeof CheckCircleIcon; bgColor: string; borderColor: string; textColor: string; iconColor: string }
> = {
    success: {
        icon: CheckCircleIcon,
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200',
        textColor: 'text-emerald-900',
        iconColor: 'text-emerald-600'
    },
    error: {
        icon: ExclamationTriangleIcon,
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        textColor: 'text-red-900',
        iconColor: 'text-red-600'
    },
    info: {
        icon: InformationCircleIcon,
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-900',
        iconColor: 'text-blue-600'
    }
};

export default function AlertMessage({
    type,
    message,
    className = '',
    onClose,
    autoDismiss = true,
    autoDismissDelay = 5000
}: AlertMessageProps) {
    const config = alertConfig[type];
    const Icon = config.icon;

    useEffect(() => {
        if (autoDismiss && onClose) {
            const timer = setTimeout(() => {
                onClose();
            }, autoDismissDelay);

            return () => clearTimeout(timer);
        }
    }, [autoDismiss, autoDismissDelay, onClose]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                role="alert"
                aria-live="polite"
                aria-atomic="true"
                className={`fixed inset-x-0 top-24 z-[100] mx-auto max-w-2xl px-4 ${className}`}
            >
                <div
                    className={`
            flex items-start gap-4 rounded-3xl border-2 p-6 shadow-2xl backdrop-blur-sm
            ${config.bgColor} ${config.borderColor} ${config.textColor}
          `}
                >
                    <Icon className={`h-8 w-8 flex-shrink-0 ${config.iconColor}`} aria-hidden="true" />
                    <div className="flex-1 text-base font-medium leading-relaxed">{message}</div>
                    {onClose && (
                        <button
                            onClick={onClose}
                            className={`flex-shrink-0 rounded-full p-1 transition hover:bg-white/50 ${config.iconColor}`}
                            aria-label="Cerrar mensaje"
                        >
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
