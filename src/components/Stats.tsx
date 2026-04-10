import { motion } from 'framer-motion';
import { Users, Music, Calendar, TrendingUp } from 'lucide-react';

const Stats = () => {
  const stats = [
    { label: 'Registered Artists', value: '2,450+', icon: Users, color: 'text-blue-500' },
    { label: 'Gospel Genres', value: '18', icon: Music, color: 'text-purple-500' },
    { label: 'Upcoming Events', value: '156', icon: Calendar, color: 'text-orange-500' },
    { label: 'Monthly Growth', value: '12%', icon: TrendingUp, color: 'text-green-500' },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center"
            >
              <div className={`p-3 rounded-xl bg-background border mb-4 shadow-sm`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;