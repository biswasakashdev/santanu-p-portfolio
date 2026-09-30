import * as motion from "motion/react-client"

export function GoldDivider({ className = '', duration = 1.4 }) {
    return (
        <div className={`flex justify-center ${className}`}>
            <motion.div
                className="h-px bg-gold"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration, ease: 'easeInOut' }}
            />
        </div>
    );
}