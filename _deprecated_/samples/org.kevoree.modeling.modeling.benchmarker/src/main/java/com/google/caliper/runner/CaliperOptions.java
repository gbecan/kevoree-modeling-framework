/**
 * Licensed under the GNU LESSER GENERAL PUBLIC LICENSE, Version 3, 29 June 2007;
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.gnu.org/licenses/lgpl-3.0.txt
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Authors:
 * Fouquet Francois
 * Nain Gregory
 */
package com.google.caliper.runner;

import com.google.common.collect.ImmutableSet;
import com.google.common.collect.ImmutableSetMultimap;

public interface CaliperOptions {
  String benchmarkClassName();
  ImmutableSet<String> benchmarkMethodNames();
  ImmutableSet<String> vmNames();
  ImmutableSetMultimap<String, String> userParameters();
  ImmutableSetMultimap<String, String> vmArguments();
  String instrumentName();
  int trialsPerScenario();
  String outputFileOrDir();
  boolean detailedLogging();
  boolean verbose();
  boolean calculateAggregateScore();
  boolean dryRun();
  String caliperRcFilename();
}