import React, { useState } from 'react';
import GuideLayout from '../../components/Guides/GuideLayout';

const SecurityChecklist = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const securityCategories = [
    {
      id: 'device-security',
      title: 'Device Security',
      icon: '📱',
      color: 'blue',
      items: [
        { id: 'device-updates', text: 'Keep devices updated with latest security patches' },
        { id: 'strong-passwords', text: 'Use strong, unique passwords with password manager' },
        { id: 'disk-encryption', text: 'Enable full disk encryption on all devices' },
        { id: 'antivirus', text: 'Use reputable antivirus software' },
        { id: 'backup-data', text: 'Regularly backup important data' },
        { id: 'secure-browser', text: 'Use secure browsers and avoid suspicious websites' }
      ]
    },
    {
      id: 'network-security',
      title: 'Network Security',
      icon: '🌐',
      color: 'green',
      items: [
        { id: 'secure-wifi', text: 'Use secure Wi-Fi networks, avoid public Wi-Fi for Bitcoin' },
        { id: 'vpn-usage', text: 'Consider VPN for additional privacy' },
        { id: 'https-only', text: 'Use HTTPS websites only' },
        { id: 'ssl-verify', text: 'Verify SSL certificates for Bitcoin services' },
        { id: 'mitm-aware', text: 'Be cautious of man-in-the-middle attacks' }
      ]
    },
    {
      id: 'social-engineering',
      title: 'Social Engineering Protection',
      icon: '🛡️',
      color: 'purple',
      items: [
        { id: 'never-share-keys', text: 'Never share private keys or seed phrases' },
        { id: 'skeptical-investments', text: 'Be skeptical of unsolicited investment opportunities' },
        { id: 'verify-support', text: 'Verify support requests through official channels' },
        { id: 'private-holdings', text: 'Don\'t discuss Bitcoin holdings publicly' },
        { id: 'educate-family', text: 'Educate family members about Bitcoin security' }
      ]
    },
    {
      id: 'physical-security',
      title: 'Physical Security',
      icon: '🔒',
      color: 'orange',
      items: [
        { id: 'secure-hardware', text: 'Secure physical storage of hardware wallets' },
        { id: 'protect-backups', text: 'Protect backup materials from unauthorized access' },
        { id: 'geographic-distribution', text: 'Consider geographic distribution of backups' },
        { id: 'tamper-seals', text: 'Use tamper-evident seals where appropriate' },
        { id: 'emergency-access', text: 'Plan for emergency access procedures' }
      ]
    },
    {
      id: 'regular-maintenance',
      title: 'Regular Maintenance',
      icon: '⚙️',
      color: 'yellow',
      items: [
        { id: 'update-wallets', text: 'Update wallet software regularly' },
        { id: 'test-backups', text: 'Review and test backup procedures' },
        { id: 'security-audits', text: 'Conduct security audits of practices' },
        { id: 'stay-informed', text: 'Stay informed about new threats and best practices' },
        { id: 'review-procedures', text: 'Review and update emergency procedures' }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
      green: 'bg-green-500/10 border-green-500/20 text-green-400',
      purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
      orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
      yellow: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'
    };
    return colors[color] || colors.blue;
  };

  const getProgressPercentage = () => {
    const totalItems = securityCategories.reduce((sum, cat) => sum + cat.items.length, 0);
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    return Math.round((checkedCount / totalItems) * 100);
  };

  const getSecurityScore = () => {
    const percentage = getProgressPercentage();
    if (percentage >= 90) return { score: 'Excellent', color: 'text-green-400', emoji: '🛡️' };
    if (percentage >= 70) return { score: 'Good', color: 'text-blue-400', emoji: '🔒' };
    if (percentage >= 50) return { score: 'Fair', color: 'text-yellow-400', emoji: '⚠️' };
    return { score: 'Needs Work', color: 'text-red-400', emoji: '🚨' };
  };

  const securityScore = getSecurityScore();

  return (
    <GuideLayout 
      title="Bitcoin Security Checklist"
      description="Essential security practices and common mistakes to avoid"
      readTime="5 min"
      learningObjectives={[
        "Essential security practices for all Bitcoin users",
        "How to protect against common Bitcoin scams",
        "Device and network security best practices",
        "Backup and recovery procedures that actually work",
        "Red flags that indicate potential security threats",
        "Building a comprehensive Bitcoin security plan"
      ]}
    
    >
      <div className="space-y-8">
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
          <p className="text-red-300">
            <strong>Critical:</strong> Your Bitcoin security is only as strong as your weakest link. This checklist covers the fundamentals that every Bitcoin user should implement.
          </p>
        </div>

        {/* Security Score */}
        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Your Security Score</h2>
            <div className="text-right">
              <div className={`text-2xl font-bold ${securityScore.color}`}>
                {securityScore.emoji} {securityScore.score}
              </div>
              <div className="text-gray-400 text-sm">
                {getProgressPercentage()}% Complete
              </div>
            </div>
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
          
          <p className="text-gray-300 text-sm mt-2">
            Check off each security practice as you implement it. Aim for 90%+ for excellent security.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Complete Security Checklist</h2>
          <p className="text-gray-300 mb-6">
            Work through each category systematically. These practices build upon each other to create layered security.
          </p>

          <div className="space-y-8">
            {securityCategories.map((category) => (
              <div key={category.id} className={`border rounded-lg p-6 ${getColorClasses(category.color)}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <span className="text-sm text-gray-400">
                    ({category.items.filter(item => checkedItems[item.id]).length}/{category.items.length})
                  </span>
                </div>
                
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <label 
                      key={item.id}
                      className="flex items-start gap-3 text-gray-300 cursor-pointer hover:text-white transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={checkedItems[item.id] || false}
                        onChange={() => handleCheck(item.id)}
                        className="w-5 h-5 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500 focus:ring-2 mt-0.5"
                      />
                      <span className={`text-sm ${checkedItems[item.id] ? 'line-through text-gray-500' : ''}`}>
                        {item.text}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Common Security Mistakes to Avoid</h2>
          <p className="text-gray-300 mb-4">
            Even experienced Bitcoin users make these critical errors. Learn from others' mistakes:
          </p>

          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-red-400 mb-2">🚨 Critical Errors</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• <strong>Storing seed phrases digitally</strong> - Screenshots, cloud storage, or email</li>
                <li>• <strong>Not testing recovery</strong> - Assuming backups work without verification</li>
                <li>• <strong>Single point of failure</strong> - Only one backup in one location</li>
                <li>• <strong>Sharing access</strong> - Giving others your private keys or passwords</li>
                <li>• <strong>Ignoring updates</strong> - Using outdated wallet software</li>
              </ul>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">⚠️ Common Pitfalls</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• <strong>Weak passwords</strong> - Using simple or reused passwords</li>
                <li>• <strong>Public Wi-Fi transactions</strong> - Exposing sensitive data</li>
                <li>• <strong>Falling for scams</strong> - "Bitcoin giveaways" or fake support</li>
                <li>• <strong>Not using 2FA</strong> - Relying only on passwords</li>
                <li>• <strong>Discussing holdings</strong> - Making yourself a target</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Incident Response Plan</h2>
          <p className="text-gray-300 mb-4">
            Even with good security, incidents can happen. Having a plan reduces damage:
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">If You Suspect a Security Breach</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1">1️⃣</span>
                <div>
                  <strong className="text-white">Secure remaining funds immediately</strong>
                  <p className="text-gray-300 text-sm">Move Bitcoin to a new, secure wallet ASAP</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">2️⃣</span>
                <div>
                  <strong className="text-white">Change all passwords and enable 2FA</strong>
                  <p className="text-gray-300 text-sm">Assume all credentials are compromised</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">3️⃣</span>
                <div>
                  <strong className="text-white">Document the incident</strong>
                  <p className="text-gray-300 text-sm">Record what happened for learning and authorities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">4️⃣</span>
                <div>
                  <strong className="text-white">Review and improve security</strong>
                  <p className="text-gray-300 text-sm">Identify and fix the security gap</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Security Tools and Resources</h2>
          <p className="text-gray-300 mb-4">
            These tools can help you implement and maintain good security practices:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-green-400">Essential Tools</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Password Manager:</strong> Bitwarden, 1Password, LastPass</li>
                <li>• <strong>2FA Apps:</strong> Google Authenticator, Authy</li>
                <li>• <strong>VPN Services:</strong> ProtonVPN, NordVPN</li>
                <li>• <strong>Secure Messaging:</strong> Signal, ProtonMail</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-blue-400">Learning Resources</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Bitcoin Security Guide:</strong> bitcoinsecurity.guide</li>
                <li>• <strong>Threat Modeling:</strong> OWASP guides</li>
                <li>• <strong>Hardware Reviews:</strong> Bitcoin hardware reviews</li>
                <li>• <strong>News Sources:</strong> Bitcoin security newsletters</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Progressive Security Implementation</h2>
          <p className="text-gray-300 mb-4">
            Don't try to implement everything at once. Follow this progression:
          </p>

          <div className="space-y-4">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">🟢 Week 1: Basics</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Enable 2FA on all Bitcoin accounts</li>
                <li>• Use a password manager</li>
                <li>• Update all devices and software</li>
                <li>• Create offline backup of seed phrases</li>
              </ul>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">🔵 Week 2: Network Security</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Set up VPN for Bitcoin activities</li>
                <li>• Review and secure Wi-Fi networks</li>
                <li>• Verify SSL certificates</li>
                <li>• Test backup recovery procedures</li>
              </ul>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-purple-400 mb-2">🟣 Week 3: Advanced Protection</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Implement geographic backup distribution</li>
                <li>• Review and improve physical security</li>
                <li>• Create incident response plan</li>
                <li>• Schedule regular security audits</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Security is a Process, Not a Destination</h3>
          <p className="text-gray-300 text-sm">
            Bitcoin security isn't a one-time setup - it's an ongoing practice. Regular reviews, updates, and improvements are essential. Your security score will improve over time as you implement more practices and develop better habits.
          </p>
        </div>
      </div>
    </GuideLayout>
  );
};

export default SecurityChecklist;