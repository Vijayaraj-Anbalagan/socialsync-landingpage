'use client';

import { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Star, Users, Target, Clock, Medal, Award, Crown } from 'lucide-react';

// Team Data Constants
const TEAMS = [
  {
    id: 'brainy-brunch',
    name: 'The Brainy Brunch',
    color: 'bg-white/50 dark:bg-white/5',
    borderColor: 'border-gray-200 dark:border-gray-800/50',
    accentColor: 'text-gray-900 dark:text-gray-100',
    bgAccent: 'bg-gray-50/50 dark:bg-gray-900/20',
    badgeColor: 'bg-blue-600',
    lead: 'Shyam',
    senior: 'Sakthi',
    members: ['Nandhana', 'Diyassen', 'Senthamizh', 'Nivedhini', 'Rajesh']
  },
  {
    id: 'tech-geeks',
    name: 'Tech Geeks',
    color: 'bg-white/50 dark:bg-white/5',
    borderColor: 'border-gray-200 dark:border-gray-800/50',
    accentColor: 'text-gray-900 dark:text-gray-100',
    bgAccent: 'bg-gray-50/50 dark:bg-gray-900/20',
    badgeColor: 'bg-blue-600',
    lead: 'Rohit Prasad',
    senior: 'Shiva',
    members: ['Prakul', 'Sai Shakini', 'Gayathri', 'Saravanan']
  },
  {
    id: 'buildforge',
    name: 'Buildforge',
    color: 'bg-white/50 dark:bg-white/5',
    borderColor: 'border-gray-200 dark:border-gray-800/50',
    accentColor: 'text-gray-900 dark:text-gray-100',
    bgAccent: 'bg-gray-50/50 dark:bg-gray-900/20',
    badgeColor: 'bg-blue-600',
    lead: 'Sandhiya',
    senior: 'Santhosh',
    members: ['Bala', 'Subashini', 'Sumalini', 'Gowtham']
  },
  {
    id: 'beyond-boundaries',
    name: 'Beyond Boundaries',
    color: 'bg-white/50 dark:bg-white/5',
    borderColor: 'border-gray-200 dark:border-gray-800/50',
    accentColor: 'text-gray-900 dark:text-gray-100',
    bgAccent: 'bg-gray-50/50 dark:bg-gray-900/20',
    badgeColor: 'bg-blue-600',
    lead: 'Sujithra',
    senior: 'Tharun',
    members: ['Darshini', 'Saranya', 'Susmitha', 'Shreyas']
  }
];

// Task Data Constants
const TASKS = [
  {
    id: 'task-1',
    title: 'Form a WhatsApp group for your team',
    description: '👉 Add me and your assigned SocialSync mentor to the group.\n👉 Pick a cool team name together!',
    points: 10,
    dueDate: '2025-06-21',
    links: [],
    status: 'completed'
  },
  {
    id: 'task-2',
    title: 'Website Makeover Discussion',
    description: 'Before the next session, each member should:\n🕵️‍♂️ Find one outdated website (gov/public/company) that needs a makeover.\n🎯 Share it in your team group.\n3️⃣ Choose 1 final website as a team that you\'ll work on.\n4️⃣ Find a reference design (screenshot from Dribbble, Behance, etc.) that shows the style/theme you want to apply.\n🛠️ After you submit all this, we\'ll pick one from each team',
    points: 40,
    dueDate: '2025-06-22',
    links: [
      { title: 'Dribbble', url: 'https://dribbble.com' },
      { title: 'Behance', url: 'https://behance.net' },
      { title: 'Pinterest', url: 'https://pinterest.com' }
    ],
    status: 'completed'
  },  {
    id: 'task-3',
    title: 'GitHub Repository Setup',
    description: 'Each team must:\n\n1️⃣ Create a public GitHub repository\n2️⃣ Add your selected website\'s index.html\n3️⃣ Add all team members (including senior) as collaborators\n4️⃣ Everyone must clone the repo to their local machine\n\n📬 Once done, share the repo link here in the group\n\n🎯 Scoring:\nEach valid collaborator = 10 marks\nMax team size = 6 → Max Score: 60 marks',
    points: 60,
    dueDate: '2025-06-23',
    links: [
      { title: 'GitHub', url: 'https://github.com' },
      { title: 'Git Documentation', url: 'https://git-scm.com/doc' }
    ],
    status: 'current'
  }
];

// Score Data Constants (simulated scores)
const TEAM_SCORES = {
  'brainy-brunch': {
    'task-1': 10,
    'task-2': 30,
    'task-3': 0  
  },
  'tech-geeks': {
    'task-1': 10,
    'task-2': 20,
    'task-3': 0
  },
  'buildforge': {
    'task-1': 10,
    'task-2': 40,
    'task-3': 0
},
  'beyond-boundaries': {
    'task-1': 10,
    'task-2': 10,
    'task-3': 0
  }
};

const LAST_UPDATED = '2025-06-23T23:20:00Z';

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState<'teams' | 'scoreboard' | 'tasks'>('teams');
  const [showOldTasks, setShowOldTasks] = useState(false);

  // Calculate total scores and rankings
  const teamTotals = TEAMS.map(team => {
    const scores = TEAM_SCORES[team.id as keyof typeof TEAM_SCORES];
    const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
    return { ...team, total, scores };
  }).sort((a, b) => b.total - a.total);

  const currentTask = TASKS.find(task => task.status === 'current');
  const completedTasks = TASKS.filter(task => task.status === 'completed');

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0: return <Crown className="w-6 h-6 text-yellow-500" />;
      case 1: return <Medal className="w-6 h-6 text-gray-400" />;
      case 2: return <Award className="w-6 h-6 text-amber-600" />;
      default: return <Trophy className="w-5 h-5 text-gray-500" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatLastUpdated = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        {/* Background Effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[40vw] h-[40vw] bg-pink-200 dark:bg-pink-700/30 opacity-40 rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[40vw] h-[40vw] bg-blue-100 dark:bg-blue-900/30 opacity-40 rounded-full blur-3xl animate-float-2"></div>        </div>        <div className="relative z-10 px-4 py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 mt-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50 text-sm font-medium mb-4 sm:mb-6">
              <Users className="w-4 h-4" />
              Workshop Teams
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4 sm:mb-6 px-2">
              Team <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dashboard</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Track team progress, view leaderboard rankings, and manage workshop tasks in one place.
            </p>
          </div>          {/* Navigation Tabs */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 p-2 rounded-2xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-gray-800/50 backdrop-blur-sm">
              <Button
                variant={activeTab === 'teams' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('teams')}
                className={`flex items-center justify-center gap-2 rounded-xl px-4 sm:px-6 py-3 font-medium transition-all duration-200 w-full sm:w-auto ${
                  activeTab === 'teams' 
                    ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                }`}
              >
                <Users className="w-4 h-4" />
                Team Details
              </Button>
              <Button
                variant={activeTab === 'scoreboard' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('scoreboard')}
                className={`flex items-center justify-center gap-2 rounded-xl px-4 sm:px-6 py-3 font-medium transition-all duration-200 w-full sm:w-auto ${
                  activeTab === 'scoreboard' 
                    ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                }`}
              >
                <Trophy className="w-4 h-4" />
                Scoreboard
              </Button>
              <Button
                variant={activeTab === 'tasks' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('tasks')}
                className={`flex items-center justify-center gap-2 rounded-xl px-4 sm:px-6 py-3 font-medium transition-all duration-200 w-full sm:w-auto ${
                  activeTab === 'tasks' 
                    ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                }`}
              >
                <Target className="w-4 h-4" />
                Tasks
              </Button>
            </div>
          </div>        {/* Team Details Tab */}
        {activeTab === 'teams' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {TEAMS.map((team) => (              <Card key={team.id} className={`${team.color} ${team.borderColor} border backdrop-blur-sm hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700/50 transition-all duration-300`}>
                <CardHeader className={`${team.bgAccent} rounded-t-lg border-b ${team.borderColor}`}>
                  <CardTitle className={`${team.accentColor} text-2xl font-bold text-center`}>
                    {team.name}
                  </CardTitle>
                </CardHeader>                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    {/* Team Lead */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white w-fit">
                        <Crown className="w-3 h-3 mr-1" />
                        Team Lead
                      </Badge>
                      <span className={`${team.accentColor} font-semibold text-base sm:text-lg`}>
                        {team.lead}
                      </span>
                    </div>

                    {/* Senior */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <Badge className="bg-purple-500 hover:bg-purple-600 text-white w-fit">
                        <Star className="w-3 h-3 mr-1" />
                        Senior
                      </Badge>
                      <span className={`${team.accentColor} font-medium`}>
                        {team.senior}
                      </span>
                    </div>

                    {/* Members */}
                    <div>
                      <h4 className={`${team.accentColor} font-medium mb-2 flex items-center gap-2`}>
                        <Users className="w-4 h-4" />
                        Team Members
                      </h4>                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {team.members.map((member, index) => (
                          <div
                            key={index}
                            className="bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-colors duration-200"
                          >
                            {member}
                          </div>
                        ))}
                      </div>
                    </div>                    {/* Team Stats */}
                    <div className="pt-2 border-t border-gray-200/60 dark:border-gray-700/60">
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>Total Members:</span>
                        <span className="font-semibold">{team.members.length + 2}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Scoreboard Tab */}
        {activeTab === 'scoreboard' && (
          <div className="space-y-6">            {/* Last Updated Info */}
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              Last updated: {formatLastUpdated(LAST_UPDATED)}
            </div>

            {/* Leaderboard */}
            <div className="grid gap-4">
              {teamTotals.map((team, index) => (
                <Card key={team.id} className={`${team.color} ${team.borderColor} border backdrop-blur-sm hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700/50 transition-all duration-300`}>                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-2">
                          {getRankIcon(index)}
                          <span className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-gray-300">#{index + 1}</span>
                        </div>                        <div>
                          <h3 className={`${team.accentColor} text-lg sm:text-xl font-bold`}>
                            {team.name}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Led by {team.lead}</p>
                        </div>
                      </div>
                      <div className="text-center sm:text-right">
                        <div className={`${team.accentColor} text-2xl sm:text-3xl font-bold`}>
                          {team.total}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">points</div>
                      </div>
                    </div>                    {/* Task Breakdown */}
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                      {TASKS.map((task, taskIndex) => (
                        <div key={task.id} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-2 text-center border border-gray-200/50 dark:border-gray-700/50">
                          <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Task {taskIndex + 1}</div>
                          <div className={`${team.accentColor} font-bold`}>
                            {team.scores[task.id as keyof typeof team.scores] || 0}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">/{task.points}</div>
                        </div>
                      ))}
                    </div>                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                        <span>Overall Progress</span>
                        <span>{Math.round((team.total / 160) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-500 bg-blue-600"
                          style={{ width: `${(team.total / 110) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Tasks Tab */}
        {activeTab === 'tasks' && (
          <div className="space-y-6">            {/* Current Task */}
            {currentTask && (
              <Card className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 border border-blue-200/60 dark:border-blue-800/40 shadow-lg backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-blue-100/50 to-indigo-100/50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-t-lg">
                  <CardTitle className="text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Current Task
                  </CardTitle>
                </CardHeader>                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-blue-800 dark:text-blue-200 mb-2">
                        {currentTask.title}
                      </h3>                      <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg whitespace-pre-line">
                        {currentTask.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 sm:items-center">
                      <Badge className="bg-blue-600 dark:bg-blue-500 text-white w-fit">
                        {currentTask.points} Points
                      </Badge>
                      <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Due: {formatDate(currentTask.dueDate)}
                      </div>
                    </div>

                    {currentTask.links.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Resources:</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentTask.links.map((link, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              className="text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                            >
                              {link.title}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Toggle Old Tasks */}
            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => setShowOldTasks(!showOldTasks)}
                className="flex items-center gap-2"
              >
                {showOldTasks ? 'Hide' : 'Show'} Completed Tasks
                <div className={`transform transition-transform ${showOldTasks ? 'rotate-180' : ''}`}>
                  ↓
                </div>
              </Button>
            </div>            {/* Old Tasks */}
            {showOldTasks && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center">Completed Tasks</h3>
                {completedTasks.map((task, index) => (
                  <Card key={task.id} className="bg-gray-50/80 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">                    <CardContent className="p-3 sm:p-4">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                            Task {index + 1}: {task.title}
                          </h4>                          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1 whitespace-pre-line">
                            {task.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs">
                              {task.points} Points
                            </Badge>
                            <Badge variant="outline" className="text-green-600 dark:text-green-400 border-green-300 dark:border-green-600 text-xs">
                              ✓ Completed
                            </Badge>                          </div>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 lg:text-right">
                          Due: {formatDate(task.dueDate)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
